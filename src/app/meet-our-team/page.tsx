import React from 'react';
import { Header } from '../components';
import Team from '../components/Team';

export default function () {
  return (
    <div>
        <Header />
        <Team showAll={true} /> 
    </div>
  );
}