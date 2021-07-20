export const convertMeterToMile = (meter: number) => {
  const oneMeterToMile = 0.000621;
  return (meter * oneMeterToMile).toFixed(2);
};

export const convertMPSToMPH = (mps: number) => {
  return (mps * 2.236936).toFixed(2);
};
