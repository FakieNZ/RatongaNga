gs.print(getDuplicates('sys_user','u_person_id'));
gs.print(getDuplicates('sys_user','user_name'));

function getDuplicates(tablename,val) {
    
    var duplicateRecords = [];
    var aggregateQuery = new GlideAggregate(tablename);
    
    aggregateQuery.addQuery('active','true');
    aggregateQuery.addAggregate('COUNT',val);
    aggregateQuery.addNotNullQuery(val);
    aggregateQuery.groupBy(val);
    aggregateQuery.addHaving('COUNT', '>', 1);
    aggregateQuery.query();

    while (aggregateQuery.next()) {
        duplicateRecords.push(aggregateQuery[val].toString());  
    }
    
    return duplicateRecords;
}
