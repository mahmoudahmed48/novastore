import CategoriesSection from './components/common/CategoriesSection/CategoriesSection'
import Hero from './components/common/Hero'
import RootLayout from './layouts/RootLayout'

function App() {

  return (
    <RootLayout>
      <Hero />
      <CategoriesSection />
    </RootLayout>
  )
}

export default App
