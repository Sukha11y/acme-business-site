import type { Config } from '@userway/cicd-cli' 
export default { 
  organization: "acme-kuuzi",
  project: "acme-business-site-1",
  token: "mfv44mtgrwfpcr19vjqirbsdvlxqt2w3za86w8pl",
  //token: process.env.USERWAY_TOKEN,
  reportPaths: ["./uw-a11y-reports"],
  server: "https://api.qa.userway.dev",
//   connection: 'https://tools.userway.dev',
//   pages: [
//             { url: '/run-time.html', elementScreenshots: true, devices: ['desktop'], load: { delay: "30 seconds" }}
//         ]
// } satisfies Config;
// Uncomment 6th line and comment line 8th to 12th 
// import type { Config } from '@userway/cicd-cli' 
// export default { 
//   organization: "maksym-makar-42-userway-org-olokk",
//   project: "qa-verification-7",
//   reportPaths: ["./uw-a11y-reports"],
//   token:"cclnqtanugvm9fmsxsb6gpbklmusedwkq5cx77zc",
//   server: "https://api.qa.userway.dev"
} satisfies Config;
