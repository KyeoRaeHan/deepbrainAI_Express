require('dotenv').config();
const cors = require('cors')
const express = require('express');
const app = express();
const { port } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 

// const APP = './app/routes'
// // const nodes = ['admin','basic','board','game','todo','user']
// const nodes = ['basic']
// for(const leaf of nodes){
//   require(`${APP}/${leaf}.route`)({url:`/api/${leaf}`,app})
// }

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

app.listen(port, () => {
  console.log('***************** ***************** *****************')
  console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
  console.log('***************** ***************** *****************')
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})


