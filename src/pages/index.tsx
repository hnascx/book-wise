import { HomeContainer } from "@/styles/pages/home"
import { NextPageWithLayout } from "./_app"
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { LatestRatings } from "@/components/LatestRatings"

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  )
}

HomePage.getLayout = (page) => {
  return (
    <DefaultLayout title="Home">
      {page}
    </DefaultLayout>
  )
}

export default HomePage
