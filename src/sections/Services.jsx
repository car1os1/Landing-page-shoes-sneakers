import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Subcribe = () => {
    return (
        <section className="flex max-container justify-center flex-wrap gap-9 ">
            {services.map((service) => (
                <ServiceCard key={service.label}
                    {...service} />
            ))}
        </section>
    )
}

export default Subcribe
