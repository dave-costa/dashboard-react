import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          price: 6000,
          type: 'deposit',
          category: 'Developer',
          createdAt: new Date('2021-02-12 21:41:00')
        },
        {
          id: 2,
          title: 'Rent',
          price: 1500,
          type: 'withdraw',
          category: 'House',
          createdAt: new Date('2021-02-1 11:41:00')
        }
      ]
    })
  },
 
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

