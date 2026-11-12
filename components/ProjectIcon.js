import React from 'react';
import {
  RiBrainLine,
  RiShieldKeyholeLine,
  RiCloudLine,
  RiLayoutMasonryLine,
  RiSearchEyeLine,
  RiCpuLine,
  RiScanLine,
  RiMapPin2Line,
  RiStore2Line,
  RiShoppingBag3Line,
  RiBuildingLine,
  RiHome4Line,
  RiHospitalLine,
  RiTruckLine,
} from 'react-icons/ri';
import { SiPytorch, SiApachekafka } from 'react-icons/si';

export const renderProjectIcon = (iconName, className = 'text-3xl') => {
  switch (iconName) {
    case 'shield':
      return <RiShieldKeyholeLine className={className} />;
    case 'brain':
      return <RiBrainLine className={className} />;
    case 'cloud':
      return <RiCloudLine className={className} />;
    case 'laptop':
      return <RiLayoutMasonryLine className={className} />;
    case 'eye':
      return <RiSearchEyeLine className={className} />;
    case 'kafka':
      return <SiApachekafka className={className} />;
    case 'pytorch':
      return <SiPytorch className={className} />;
    case 'cpu':
      return <RiCpuLine className={className} />;
    case 'scan':
      return <RiScanLine className={className} />;
    case 'map':
      return <RiMapPin2Line className={className} />;
    case 'store':
      return <RiStore2Line className={className} />;
    case 'bag':
      return <RiShoppingBag3Line className={className} />;
    case 'building':
      return <RiBuildingLine className={className} />;
    case 'home':
      return <RiHome4Line className={className} />;
    case 'hospital':
      return <RiHospitalLine className={className} />;
    case 'truck':
      return <RiTruckLine className={className} />;
    default:
      return <RiCpuLine className={className} />;
  }
};
