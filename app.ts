'use strict';

import * as path from 'path';
import { Application } from 'egg';
export default (app: Application) => {
  /**
   * 应用启动前初始化工作
   */
  app.beforeStart(async () => {
    app['tips'] = 'tomato-bill start...';
    console.log(app['tips']);
  });
  const directory = path.join(app.config.baseDir, 'app/util');
  app.loader.loadToApp(directory, 'util');
};
