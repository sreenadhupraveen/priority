function getAssignedTickets(records){
  let groupedRecords = new Map();
  for(let record of records){
    
        if(groupedRecords.has(record.asignee)){
          let currRecords = groupedRecords.get(record.asignee);
            currRecords.push(record.key);
            groupedRecords.set(record.asignee,currRecords);
        }
        else{
            groupedRecords.set(record.asignee,[record.key]);
        }
  }

  return [...groupedRecords.entries()];
}


function getAssignedTicketsSelf(records){
  let groupedRecords = {}
  for(let record of records){
    
        if(groupedRecords.hasOwnProperty(record.asignee)){
          let currRecords = groupedRecords[record.asignee];
          console.log(currRecords);
            currRecords.push(record.key);
        }
        else{
            groupedRecords[record.asignee] = [record.key];
        }
  }

  return groupedRecords;
}

const data = [{key:1,asignee:'praveen'},{key:2,asignee:'ved'}, {key:2,asignee:'praveen'}];


console.log(getAssignedTicketsSelf(data));