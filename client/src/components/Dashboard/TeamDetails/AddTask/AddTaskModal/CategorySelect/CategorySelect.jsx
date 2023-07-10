/* eslint-disable react/prop-types */

  
import { useState } from 'react';
import { categoryName } from '../../../../../../data/category';
import AutoSuggestInput from '../../../../../shared/AutoSuggestInput';

const CategorySelect = ({selectedCategory, setSelectedCategory}) => {
    const [results, setResults] = useState();
    

    const handleChangeCategory = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = categoryName.filter((category) =>
            category.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    };

    const handleClickCategory = () => {
        setResults(categoryName);
    }

    return (
        <div>
            <label className="label">
                <span className="label-text ml-1">Task Category <span className='text-slate-400'>( Optional )</span></span>
            </label>
            
            <AutoSuggestInput
                results={results}
                renderItem={(item) => <p>{item}</p>}
                onChange={handleChangeCategory} 
                value={selectedCategory}
                setValue={setSelectedCategory}
                handleClick={handleClickCategory} 
                placeholderlText={"Select Category"} 
            />

        </div>
    );
};

export default CategorySelect;