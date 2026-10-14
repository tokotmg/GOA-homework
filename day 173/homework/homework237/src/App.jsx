//React-ში უკონტროლო კომპონენტი არის კომპონენტი, რომელშიც ფორმის მონაცემებს თავად DOM მართავს და არა — React-ის მდგომარეობა (state).
//მართვადი კომპონენტი არის შეყვანის ელემენტი (მაგალითად, `<input>`, `<textarea>` ან `<select>`), რომლის მნიშვნელობაც მთლიანად React-ის მდგომარეობით (state) განისაზღვრება და არა ბრაუზერის DOM-ით.
import LiveTextMirror from "./LiveTextMirror"
import UncontrolledInputComponent from "./UncontrolledInputComponent"
import ControlledCheckbox from "./ControlledCheckBox"
function App() {
  return (
    <div>
      <LiveTextMirror />
      <UncontrolledInputComponent />
      <ControlledCheckbox />
    </div>
  )
}

export default App
