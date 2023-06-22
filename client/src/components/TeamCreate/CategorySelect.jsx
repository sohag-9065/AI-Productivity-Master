/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import AutoSuggestInput from '../shared/AutoSuggestInput';

import { categoryName } from '../../data/category';

const CategorySelect = ({ setCatagoryData }) => {
    const [results, setResults] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");
  
    useEffect(() => {
        if (selectedCategory) setCatagoryData(selectedCategory);
    }, [selectedCategory]);

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
                <span className="label-text ml-1">Project Category <span className='text-slate-400'>( Optional )</span></span>
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