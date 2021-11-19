module.exports = {
  apps: [
    {
      script: "dist/back/src/server.js",
      name: "gestion-stock",
      instances: "max",
      exec_mode: "cluster",
      env: {
        GESTION_STOCK_PORT: 3666,
      },
    },
  ],
};
