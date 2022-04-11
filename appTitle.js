export default {
    template: /*HTML*/`<h1>Hello {{Name}}</h1>`,
    data: () => ({

    }),
    props: {
        Name: {
            type: String
        }
    }
}