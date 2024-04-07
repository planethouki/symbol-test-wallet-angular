const { app } = require('@azure/functions');

app.http('todolist', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const todoList = [
            {
                id: 1,
                title: 'Buy milk',
                completed: false
            },
            {
                id: 2,
                title: 'Buy bread',
                completed: true
            }
        ]

        return {
             body: JSON.stringify(todoList),
             headers: {
                'Content-Type': 'application/json'
             }
        };
    }
});
