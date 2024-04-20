//Вывести общее ко-во клиентов из Germany и USA
db.users.countDocuments(
{ country: {$in: ['France', 'USA'] } }
);