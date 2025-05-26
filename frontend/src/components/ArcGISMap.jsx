import React, { useEffect, useRef, useState } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import ImageElement from '@arcgis/core/layers/support/ImageElement';
import Basemap from '@arcgis/core/Basemap';
import ExtentAndRotationGeoreference from '@arcgis/core/layers/support/ExtentAndRotationGeoreference';
import Extent from '@arcgis/core/geometry/Extent';
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import './ArcGISMap.css';

const ArcGISMap = ({ onMapReady }) => {
  const mapRef = useRef(null);
  const viewRef = useRef(null);
  const [selectedSiteData, setSelectedSiteData] = useState(undefined);
  const [selectedContaminant, setSelectedContaminant] = useState("Runoff");
  const [animationKey, setAnimationKey] = useState(0);
  const [countyName, setCountyName] = useState('');
  const overlayConfig = {
    "Runoff": {
      image: "http://localhost:5173/svg_overlays/runoffreworked.png",
      extent: {
        xmin: -14321596.794,
        ymin: 2214445.288,
        xmax: -7181756.645,
        ymax: 7048125.019
      }
    },
    "Biological Material": {
      image: "http://localhost:5173/svg_overlays/fecalreworked.png",
      extent: {
        xmin: -14321596.794,
        ymin: 2214445.288,
        xmax: -7181756.645,
        ymax: 7048125.019
      }
    },
    "Nitrogen Compounds": {
      image: "http://localhost:5173/svg_overlays/nitroreworked.png",
      extent: {
        xmin: -14321596.794,
        ymin: 2214445.288,
        xmax: -7181756.645,
        ymax: 7048125.019
      }
    },
    "Phosphorous Compounds": {
      image: "http://localhost:5173/svg_overlays/phosphreworked.png",
      extent: {
        xmin: -14321596.794,
        ymin: 2214445.288,
        xmax: -7181756.645,
        ymax: 7048125.019
      }
    },
    "Heavy Metals": {
      image: "http://localhost:5173/svg_overlays/hmetalreworked.png",
      extent: {
        xmin: -14321596.794,
        ymin: 2214445.288,
        xmax: -7181756.645,
        ymax: 7048125.019
      }
    }
  };
  
  useEffect(() => {
    if (!mapRef.current) return;
  
    const config = overlayConfig[selectedContaminant];
  
    const imageElement = new ImageElement({
      image: config.image,
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          spatialReference: { wkid: 3857 },
          ...config.extent
        })
      })
    });
  
    const mediaLayer = new MediaLayer({
      source: [imageElement],
      opacity: 0.8,
      title: selectedContaminant,
      blendMode: "normal"
    });
  
    const map = new Map({
      basemap: 'topo-vector',
      layers: [mediaLayer]
    });
  
    const view = new MapView({
      container: mapRef.current,
      map,
      center: [-95.7129, 37.0902],
      zoom: 4,
    });
  
    viewRef.current = view;

    view.on('click', async (event) => {
      const lat = event.mapPoint.latitude.toFixed(8);
      const lon = event.mapPoint.longitude.toFixed(8);
      console.log('Clicked Coordinates:', lat, lon);

      try {
        const endpointMap = {
          "Runoff": "runoff-search-by-latlon",
          "Biological Material": "fecal-search-by-latlon",
          "Nitrogen Compounds": "nitro-search-by-latlon",
          "Phosphorous Compounds": "phospates-search-by-latlon",
          "Heavy Metals": "hmetal-search-by-latlon"
        };
        const endpoint = endpointMap[selectedContaminant] || "runoff-search-by-latlon";
        const apiUrl = `http://localhost:8000/api/${endpoint}/?lat=${lat}&lon=${lon}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        const marker = new Graphic({
          geometry: { type: 'point', latitude: +lat, longitude: +lon },
          symbol: { type: 'simple-marker', color: '#547ca3', size: '10px' },
        });

        view.graphics.removeAll();
        view.graphics.add(marker);

        if (res.ok && data) {
            // Log county name if it exists
            const county = Array.isArray(data) ? data[0]?.namelsad : data?.namelsad;
            setCountyName(county || '');            

          if (countyName) {
            console.log("County Name:", countyName);
          } else {
            console.log("County name (namelsad) not found in API response.");
          }

          if (Array.isArray(data) && data.length > 0) {
            setSelectedSiteData(data);
            setAnimationKey(prev => prev + 1);
          } else if (data.characteristicname) {
            setSelectedSiteData([data]);
            setAnimationKey(prev => prev + 1);
          } else {
            setSelectedSiteData([{ message: `No ${selectedContaminant} contamination data available in this area.` }]);
            setAnimationKey(prev => prev + 1);
          }
        } else {
          setSelectedSiteData([{ message: `No ${selectedContaminant} contamination data available in this area.` }]);
          setAnimationKey(prev => prev + 1);
        }
      } catch (error) {
        console.error('API fetch error:', error);
        setSelectedSiteData([{ message: 'Error fetching data.' }]);
        setAnimationKey(prev => prev + 1);
      }
    });

    view.when(() => onMapReady?.());

    return () => view.destroy();
  }, [onMapReady, selectedContaminant]);

  useEffect(() => {
    // Reset site data on toggle change to clear histogram
    setSelectedSiteData(undefined);
  }, [selectedContaminant]);

  const MCLG = {
    //runoff
    Glyphosate: 700000, //ng/l
    Toluene: 1000000,
    Hexazinone: 210000,
    Trichloroethylene: 0,
    Atrazine: 3000,
    Styrene: 100000,
    Uranium: 0,
    Benzene: 0, //ng/l
    // Biological Material (in CFU/100mL)
    "Total Coliform": 0,           // 0 CFU/100mL
    "Fecal Coliform": 0,           // 0 CFU/100mL
    "Total Suspended Solids": 50, // 50 mg/L typical secondary standard converted to ng/L
    "Fecal": 0,

    // Phosphorus Compounds (in mg/L)
    Phosphorus: 1,              // 1 mg/L = 1000000 ng/L — guideline from USEPA for eutrophication prevention
    Phosphate: 1,               // 1 mg/L — aligned with above

    // Nitrogen Compounds (in mg/L)
    Nitrite: 1,                    // 1 mg/L
    Nitrate: 10,                   // 10 mg/L
    Nitrogen: 10,                  // 10 mg/L (as total N, from EPA)

    // Heavy Metals (in micrograms/L)
    Chromium: 100,
    Arsenic: 0,
    Mercury: 2,
    Cadmium: 5,
    Lead: 0
  };

  const unitMap = {
    "Runoff": "ng/L",
    "Heavy Metals": "µg/L",
    "Biological Material": "mg/L",
    "Phosphorous Compounds": "mg/L",
    "Nitrogen Compounds": "mg/L"
  };

  const renderHistogram = (dataArray) => {
    const chartData = dataArray.map((item) => {
      const name = item.characteristicname;
      const actual = item.resultmeasurevalue ?? 0;
      const goal = MCLG[name] ?? 0;
      return {
        name,
        Actual: actual,
        Limit: goal,
      };
    });
    const currentUnit = unitMap[selectedContaminant] || "ng/L";

    return (
      <ResponsiveContainer width="90%" height="80%">
        {countyName && (
           <p className="mt-4 text-base text-gray-800 font-medium">
            {countyName}
          </p>
        )}
        <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
          <XAxis type="number" label={{ value: currentUnit, position: 'insideBottom', offset: -5 }} />
          <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 14 }} />
          <Tooltip formatter={(value, name, props) => {
            const actualRounded = typeof value === 'number' ? value.toFixed(2) : value;
            const goalRounded = props?.payload?.Limit !== undefined ? props.payload.Limit.toFixed(2) : 'N/A';
            return [
              <>
                <div>{actualRounded} {currentUnit}</div>
                <div className="text-gray-800 text-sm">Limit: {goalRounded} {currentUnit}</div>
              </>
            ];
          }} />
          <Bar dataKey="Actual">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.Actual > entry.Limit ? "#440B0B" : "#547ca3"} />
            ))}
          </Bar>
        </BarChart>
        {renderCustomLegend()}
      </ResponsiveContainer>
    );
  };

  const renderCustomLegend = () => (
    <ul className="flex gap-4 mt-7 ml-3">
      <li className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 bg-[#547ca3]"></span>
        <span className="text-sm">Safe</span>
      </li>
      <li className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 bg-[#440B0B]"></span>
        <span className="text-sm">Unsafe</span>
      </li>
    </ul>
  );

  const renderDetails = () => {
    const isNoData =
      selectedSiteData === undefined ||
      (Array.isArray(selectedSiteData) && (
        selectedSiteData.length === 0 ||
        selectedSiteData.every(item => !item.characteristicname)
      )) ||
      selectedSiteData?.[0]?.message;

    return (
      <div className="max-h-[500px] overflow-y-auto h-full w-full flex items-start justify-center p-4">
        {selectedSiteData === undefined ? (
          <p className="italic text-gray-500">Select a site to view details.</p>
        ) : isNoData ? (
          <motion.p
            key={animationKey}
            className="italic text-gray-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
          {selectedSiteData?.[0]?.message ||
    `       No ${selectedContaminant} contamination data available in this area.`}          
          </motion.p>
        ) : (
          <>
            {renderHistogram(selectedSiteData)}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-[1fr_5fr_2fr] h-[85vh]">
      <div className="p-4 overflow-auto border-r">
        <h2 className="text-xl font-bold mb-4">Contaminant Filters</h2>
        <div className="flex flex-col gap-2">
          {["Runoff", "Biological Material", "Nitrogen Compounds", "Phosphorous Compounds", "Heavy Metals"].map((label) => (
            <button
              key={label}
              className={`px-4 py-2 rounded transition ${
                selectedContaminant === label ? "bg-[#547ca3] text-white" : "bg-[#440B0B] text-white hover:bg-[#547ca3]"
              }`}
              onClick={() => setSelectedContaminant(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-2 flex items-center justify-center">
        <div className="map-border h-[25vh] w-full relative">
          <div className="map-container w-full h-full" ref={mapRef}></div>
        </div>
      </div>

      <div className="p-4 overflow-auto border-l h-full">
        <h2 className="text-xl font-bold mb-4">Site Details</h2>
        {renderDetails()}
      </div>
    </div>
  );
};

export default ArcGISMap;
