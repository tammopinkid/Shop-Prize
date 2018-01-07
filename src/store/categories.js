const state = {
  all: [
    {
      name: 'สื่อบันเทิงภายในบ้าน',
      cat_id: '60',
      url: 'https://shopee.co.th/สื่อบันเทิงภายในบ้าน-cat.60?categoryName=สื่อบันเทิงภายในบ้าน&page='
    },
    {
      name: 'เครื่องใช้ไฟฟ้าภายในบ้าน',
      cat_id: '12996',
      url: 'https://shopee.co.th/เครื่องใช้ไฟฟ้าภายในบ้าน-cat.12996?categoryName=เครื่องใช้ไฟฟ้าภายในบ้าน&page='
    },
    {
      name: 'ของเล่น-สินค้าแม่และเด็ก',
      cat_id: '58',
      url: 'https://shopee.co.th/ของเล่น-สินค้าแม่และเด็ก-cat.58?categoryName=ของเล่น-สินค้าแม่และเด็ก&page='
    },
    {
      name: 'เสื้อผ้าแฟชั่นผู้ชาย',
      cat_id: '48',
      url: 'https://shopee.co.th/เสื้อผ้าแฟชั่นผู้ชาย-cat.48?categoryName=เสื้อผ้าแฟชั่นผู้ชาย&page='
    },
    {
      name: 'มือถือและอุปกรณ์เสริม',
      cat_id: '54',
      url: 'https://shopee.co.th/มือถือและอุปกรณ์เสริม-cat.54?categoryName=มือถือและอุปกรณ์เสริม&page='
    },
    {
      name: 'เครื่องใช้ในบ้าน',
      cat_id: '57',
      url: 'https://shopee.co.th/เครื่องใช้ในบ้าน-cat.57?categoryName=เครื่องใช้ในบ้าน&page='
    },
    {
      name: 'นาฬิกาและแว่นตา',
      cat_id: '51',
      url: 'https://shopee.co.th/นาฬิกาและแว่นตา-cat.51?categoryName=นาฬิกาและแว่นตา&page='
    },
    {
      name: 'คอมพิวเตอร์และแล็ปท็อป',
      cat_id: '55',
      url: 'https://shopee.co.th/คอมพิวเตอร์และแล็ปท็อป-cat.55?categoryName=คอมพิวเตอร์และแล็ปท็อป&page='
    },
    {
      name: 'กล้องและอุปกรณ์ถ่ายภาพ',
      cat_id: '56',
      url: 'https://shopee.co.th/กล้องและอุปกรณ์ถ่ายภาพ-cat.56?categoryName=กล้องและอุปกรณ์ถ่ายภาพ&page='
    },
    {
      name: 'กีฬาและกิจกรรมกลางแจ้ง',
      cat_id: '147',
      url: 'https://shopee.co.th/กีฬาและกิจกรรมกลางแจ้ง-cat.147?categoryName=กีฬาและกิจกรรมกลางแจ้ง&page='
    }
  ]
}
const getters = {
  allCategories (state) {
    return state.all
  }
}

export default {
  state,
  getters
}
