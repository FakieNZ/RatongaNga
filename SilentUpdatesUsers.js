var users = new GlideRecord('sys_user');

users.query();
 
//gs.print(users.getRowCount());

while (users.next()) { 

    users.setWorkflow(false); // do not trigger business rules/workflows
    users.autoSysFields(false); // do not update system fields
    users.update(); // update row
}
