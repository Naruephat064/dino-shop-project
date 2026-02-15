import { ref } from 'vue'

const items = ref([])

export const useCart = () => {
  const add = (product) => {
    if (items.value.length >= 3) {
      alert('ตะกร้าเต็มแล้ว (ใส่ได้ 3 ชิ้น)')
      return
    }
    items.value.push(product)
  }

  return {
    items,
    add
  }
}
