import Main from '../components/main'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="m-auto flex h-full w-full max-w-screen-lg flex-col items-center justify-center gap-12 px-6 py-4">
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
