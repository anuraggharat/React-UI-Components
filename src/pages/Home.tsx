import { Link } from 'react-router-dom'

const linkLists = [
  {
      id:1,
      title:'Modal',
      link:'/components/modal'
  },
  {
      id:2,
      title:'Slider Modal',
      link:'/components/slidemodal'
  },
  {
      id:3,
      title:'Collapsible Folder',
      link:'/components/collapseFolders'
  },
  {
      id:4,
      title:'Pagination',
      link:'/components/pagination'
  },
  {
      id:5,
      title:'Stop Watch',
      link:'/components/stopwatch'
  },
  {
      id:6,
      title:'Customer Queue',
      link:'/components/customerqueue'
  },
  {
      id:7,
      title:'Progress Bar',
      link:'/components/progressbar'
  },
  {
      id:8,
      title:'Grid Lights',
      link:'/components/gridlights'
  },
  {
      id:9,
      title:'Shopping Cart',
      link:'/components/shoppingcart'
  },
  {
      id:10,
      title:'Star Rating Bar',
      link:'/components/starrating'
  },
  {
    id:11,
    title:'Accordian',
    link:'/components/accordian'
  },
  {
    id:12,
    title:'Multi Tag Input',
    link:'/components/multitaginput'
  },
  {
    id:13,
    title:'Mega Navbar',
    link:'/components/meganavbar'
  },
  {
    id:14,
    title:'Slide Show',
    link:'/components/slideshow'
  },
  {
    id:15,
    title:'Tab Component',
    link:'/components/tabmenu'
  },
  {
    id:16,
    title:'Auto Complete',
    link:'/components/autocomplete'
  },
  {
    id:17,
    title:'Infinite Scroll',
    link:'/components/infinitescroll'
  },
  {
    id:18,
    title:'Comments Section',
    link:'/components/commentssection'
  },
  {
    id:19,
    title:'Multi Checkbox',
    link:'/components/multicheckbox'
  },
  {
    id:20,
    title:'Count Down Timer',
    link:'/components/countdowntimer'
  },
  {
    id:21,
    title:'Stop Watch Type2',
    link:'/components/stopwatchtype2'
  },
  {
    id:22,
    title:'Multi Select List',
    link:'/components/multiselectlist'
  },
  {
    id:23,
    title:'Debounced Search',
    link:'/components/debouncedSearch'
  },
  {
    id:101,
    title:'Tic Tac Toe',
    link:'/smallapps/tictactoe'
  },
  {
    id:102,
    title:'EMI calculator',
    link:'/smallapps/emicalculator'
  },
  {
    id:103,
    title:'Password Generator',
    link:'/smallapps/passwordgenerator'
  },{
    id:201,
    title:'Higher Order Components',
    link:'/concepts/higherordercomponents'
  }
]

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-slate-50 p-32'>
      <div>
        <h1 className='text-xl'>React Components</h1>
        <ul className='mt-10 list-disc pl-4'>
          {linkLists.map((item)=>(
             <li key={item.id} className='text-blue-700 hover:text-blue-800 hover:underline transition-all duration-500'>
             <Link to={item.link}>{item.title}</Link>
             </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
