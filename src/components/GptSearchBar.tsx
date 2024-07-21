const GptSearchBar = () => {
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder="what do you want to watch today!"
                />
                <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar