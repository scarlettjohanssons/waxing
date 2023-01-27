import { useScrollDirection } from '@/hooks/useScrollDirection';
import React, { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export type SensorProps = {
  setIsVisible: (isVisible: boolean) => void;
  top: string;
  bottom?: string;
  isVisible: boolean;
};
const Sensor: React.FC<SensorProps> = ({
  setIsVisible,
  top,
  bottom,
  isVisible,
}) => {
  const [sensorOne, setSensorOne] = useState(false);
  const [sensorTwo, setSensorTwo] = useState(false);
  const direction = useScrollDirection();
  const bottomRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // direction === 'down' &&
    sensorOne && !sensorTwo && !isVisible && setIsVisible(true);
    // direction === 'up' &&
    //   !sensorOne &&
    //   sensorTwo &&
    //   !isVisible &&
    //   setIsVisible(true);
    // !sensorOne && sensorTwo && !isVisible && setIsVisible(true);
    (bottomRef.current?.getBoundingClientRect().top! < 0 ||
      topRef.current?.getBoundingClientRect().top! > window.innerHeight) &&
      !sensorOne &&
      !sensorTwo &&
      isVisible &&
      setIsVisible(false);
    sensorOne && sensorTwo && !isVisible && setIsVisible(true);
  }, [sensorOne, sensorTwo]);

  return (
    <>
      <VisibilitySensor onChange={(sensor: any) => setSensorOne(sensor)}>
        <div
          ref={topRef}
          style={{
            background: 'red',
            width: 10,
            height: 1,
            left: 20,
            zIndex: 100000,
            position: 'absolute',
            top,
            bottom,
          }}
        />
      </VisibilitySensor>
      {bottom && (
        <VisibilitySensor onChange={(sensor: any) => setSensorTwo(sensor)}>
          <div
            ref={bottomRef}
            style={{
              background: 'red',
              width: 10,
              height: 1,
              left: 20,
              zIndex: 100000,
              position: 'absolute',
              bottom,
            }}
          />
        </VisibilitySensor>
      )}
    </>
  );
};

export default Sensor;
