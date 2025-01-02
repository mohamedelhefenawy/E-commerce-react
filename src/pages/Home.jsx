import Bestseller from '../components/Bestseller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsLetter from '../components/NewsLetter'
import Ourpolicy from '../components/Ourpolicy'
export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Ourpolicy/>
      <NewsLetter/>
    </div>
  )
}
