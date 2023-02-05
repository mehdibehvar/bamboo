import './suggestionSection.scss'

const SuggestionSection = () => {
  return (
    <section className="suggestion_section">
      <section className="right"></section>
      <section className="left">
      <h3>پیشنهاد و انتقاد</h3>
        <form>
  
          <input className='email_input' placeholder='ایمیل خود را وارد کنید... '/>

          <input placeholder='متن خود را وارد کنید ...'/>
        <div>
        <button>ارسال</button>
        </div>
        </form>
      </section>
    </section>
  )
}

export default SuggestionSection