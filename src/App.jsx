import { CustomeReview, Footer, Hero, PopularP, Services, SpecialO, Subcribe, SuperQ } from "./sections"
import Nav from './components/Nav'


const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className=" padding">
      <PopularP />
    </section>
    <section className=" padding">
      <SuperQ />
    </section>
    <section className=" padding-x py-10">
      <Services />
    </section>
    <section className=" padding">
      <SpecialO />
    </section>
    <section className=" bg-pale-blue padding">
      <CustomeReview />
    </section>
    <section className="  padding-x sm:py-32 py-16 w-full">
      <Subcribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)

export default App