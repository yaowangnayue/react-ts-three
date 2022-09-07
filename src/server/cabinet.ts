const path = 'http://127.0.0.1:4523/m1/1579513-0-default/cabinet/';

function getCabinetByName(name: string){
  return fetch(path + name).then(res=>res.json())
}

export {getCabinetByName}