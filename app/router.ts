'use strict';
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/api/ping', controller.home.index);
  /** TEST: unregister consul */
  // router.get('/api/unregister', controller.home.unregister);

  /**
  * 账单
  */
  router.get('/api/bill', controller.bill.list);
  router.post('/api/assetbill', controller.bill.listBillByAsset);
  router.post('/api/bill/statistics', controller.bill.statistics);
  router.post('/api/bill/billexchange', controller.bill.billExchange);
  router.get('/api/bill/:id', controller.bill.findById);
  router.post('/api/bill', controller.bill.create);
  router.del('/api/bill/:id', controller.bill.deleteById);
  router.post('/api/bill/:id', controller.bill.updateById);

  /**
  * 资产
  */
  router.get('/api/asset', controller.asset.list);
  router.get('/api/asset/:id', controller.asset.findById);
  router.post('/api/asset', controller.asset.create);
  router.del('/api/asset/:id', controller.asset.deleteById);
  router.post('/api/asset/:id', controller.asset.updateById);

};
