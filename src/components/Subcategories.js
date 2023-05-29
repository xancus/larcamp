import useFilter from '@/hooks/useFilter'

export default function Subcategories({ filteredProducts }) {
  const { filters, setFilters } = useFilter()

  const handleCheckboxChange = (subcategory) => {
    if (filters.subcategory.includes(subcategory)) {
      const newSubs = filters.subcategory.filter(sub => sub !== subcategory)
      console.log('aqui')
      setFilters({ subcategory: newSubs.length > 0 ? newSubs : ['all'] })
    } else {
      const updatedSubcategory = [...filters.subcategory, subcategory]
      setFilters({ subcategory: updatedSubcategory })
    }
  }
  // className='font-bold hover:text-teal-400 uppercase text-xs text-gray-600 cursor-pointer'
  return (
    <div>
      {filteredProducts.map((prod, idx) => {
        const isLast = idx === filteredProducts.length - 1
        return (
          <div key={prod.id}>
            <label
              className='font-bold text-gray-600 hover:text-teal-600 uppercase text-xs cursor-pointer flex items-center p-2 border-b border-gray-400 w-full'
            >
              <input
                type='checkbox'
                checked={filters.subcategory.includes(prod.subcategory)}
                onChange={() => handleCheckboxChange(prod.subcategory)}
                className='mr-2'
              />
              {prod.subcategory}
            </label>
            {isLast
              ? <label
                  className='font-bold text-gray-600 hover:text-teal-600 uppercase text-xs cursor-pointer flex items-center p-2 border-b border-gray-400 w-full'
                >
                <input
                  type='checkbox'
                  checked={filters.subcategory.includes('all')}
                  onChange={() => handleCheckboxChange('all')}
                  className='mr-2'
                />
                Todas
              </label>
              : <></>}
          </div>
        )
      })}
    </div>
  )
}
