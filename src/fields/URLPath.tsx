import { Field } from 'payload'
import DynamicURLComponent from './DynamicURLComponent'

export const landingURLField: Field = {
    name: 'landingURL',
    type: 'text',
    admin: {
        readOnly: true, // Solo lectura
        description: 'Este campo muestra la URL dinámica basada en el slug.',
        components: {
            Field: DynamicURLComponent, // Usamos el componente personalizado aquí
        },
    },
}
