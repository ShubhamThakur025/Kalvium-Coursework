function ErrorSection() {
    return (
        <div>
            <div className="lower w-10/12 m-auto">
                <button className='bg-blue-500 px-2.5 py-1 w-32 font-semibold rounded text-white my-10 h-12'>Button One</button>
                <div className="error rounded-md text-red-600 bg-red-200 py-5 px-5 border-red-600 border"><span className='font-bold'>Alert!</span> This is awesome!</div>
            </div>
        </div>
    )
}

export default ErrorSection
