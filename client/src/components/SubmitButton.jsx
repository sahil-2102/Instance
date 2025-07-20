const SubmitButton = ({load,disabled}) => {
  return (
    <div className="w-full">
        <button
            type="submit"
            disabled={disabled}
        className="bg-green-600 p-2 rounded-md font-semibold hover:opacity-95
        w-full
        ">{load ? 'Loading...': 'Submit'}</button>
    </div>
  )
}
export default SubmitButton