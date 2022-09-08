import Video from '../components/Video';

const data = [
  {        
        id:0,
        start:0,
        title:"Rod Stewart  Young Turks (Official Video)",
        dateAdded:"20091029T21:26:05Z",
        channel:"Rod Stewart",
        thumbnail:"https://i.ytimg.com/vi/zQ41hqlV0Kk/mqdefault.jpg",
        description:"Official music video for Rod Stewart  Young Turks from 'Tonight I'm Yours' (1981) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr ...",
  },
{      
        id:1,
        start:5,
        title:"Rod Stewart  Baby Jane (Official Video)",
        dateAdded:"20140301T01:35:21Z",
        channel:"Rod Stewart",
        thumbnail:"https://i.ytimg.com/vi/dxl2r6GuL2w/mqdefault.jpg",
        description:"Official music video for Rod Stewart  “Baby Jane” from 'Body Wishes' (1983) Listen to more Rod Stewart here: https://rhino.lnk.to/RodStewartStr Watch all ...",
},
{
        id:2,
        start:10,
        title:"Bizcocho marmolado de naranja. SUPERESPONJOSO",
        dateAdded:"20190925T18:16:56Z",
        channel:"Anna recetasfaciles",
        thumbnail:"https://i.ytimg.com/vi/3GwA45Bcvrs/mqdefault.jpg",
        description:"Compra mi libro de recetas COCINA PARA TRIUNFAR en este link https://amzn.to/2UPUhNZ Mi sartén Tefal Aroma 24 cm https://amzn.to/2WSFjLf Batidora de ..." ,
},
{
        id:3,
        start:2,
        title:"Jarabe De palo Ying Yang",
        dateAdded:"2001204T14:37:33Z",
        channel:"Warner Music Spain",
        thumbnail:"https://i.ytimg.com/vi/JSH321S6tGc/mqdefault.jpg",
        description:"g" 
      },
{
        id:4,
        start:0,
        title:"La Niña: ¿Podrá Latinoamérica plantarle cara?",
        dateAdded:"20211023T00:15:00Z",
        channel:"DW Español",
        thumbnail:"https://i.ytimg.com/vi/AsiUBtAQ4wU/mqdefault.jpg",
        description:"Duros inviernos, huracanes más intensos y grandes sequías. Son las consecuencias de La Niña, un fenómeno que se hará notar por segundo año consecutivo." ,
      }
]

const Videos = () => {

    return (

      <>
        {
        data.map(item => (

          <Video key={item.id}> 
          start={0}
          title={item.title}
          dateAdded={item.dateAdded}
          channel={item.channel}
          thumbnail={item.thumbnail}
          description={item.description}
          </Video> 
        ))
        }
      </>
    );
}

export default Videos;