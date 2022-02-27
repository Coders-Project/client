import AppLayout from '@components/layouts/AppLayout';
import React from 'react';
import { NextComponent } from '../types/index';

const Explore: NextComponent = () => {
  return <div className="w-full">toto</div>;
};

Explore.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Explore;