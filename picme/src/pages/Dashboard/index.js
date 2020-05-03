import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

export default function Dashboard({ account, provider, network }) {
  console.log(account, provider, network);

  useEffect(() => {
    const loadVaccines = async () => {
      const response = await api.get('/vaccine');

      console.log(response.data);
    };

    loadVaccines();
  }, []);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
