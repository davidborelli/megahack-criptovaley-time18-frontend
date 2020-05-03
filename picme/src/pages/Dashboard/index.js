import React, { useEffect } from 'react';

import api from '~/services/api';
import {insertBatch, insertTransactionBatch, insertVaccinate} from '~/services/blockChain';

export default function Dashboard() {
  useEffect(() => {
    const loadVaccines = async () => {
      const response = await api.get('/vaccine');

      console.log(response.data);
    };

    loadVaccines();
  }, []);

  const handleClick = async () => {
    let response = await insertBatch(
      null,
      '0x1772976766B5C5C01EbfcACBD3C7157DDd9DCf95',
      "{'lat':-27.5,'long':-47.5}",
      '001',
      'NF'
    );
    console.log("Batch", response);

    response = await insertTransactionBatch(
      "0xef5351ac8b9ea2e0946072d598c11ca26472f5da",
    );
    console.log("Transaction batch", response);

    response = await insertVaccinate(
      "0xef5351ac8b9ea2e0946072d598c11ca26472f5da",
      '001.001.001-01',
      'CPF',
      'BCG'
    );
    console.log("Vaccinate", response);
  };

  return (
    <>
      <h1>Hello</h1>
      <button type="button" onClick={handleClick}>
        LANÇAR
      </button>
    </>
  );
}
