import { useActionState, use } from "react";
import { useFormStatus } from "react-dom";
import { OpinionsContext } from '../store/opinions-context';
import Submit from "./Submit";


export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  function isEmpty(s) {
    return !s || s.trim() === '';
  }

  async function submitFormAction(prevState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];
    if (isEmpty(userName)) {
      errors.push('Username cannot be empty');
    }
    if (isEmpty(title)) {
      errors.push('Title cannot be empty');
    }
    if (isEmpty(body)) {
      errors.push('Body cannot be empty');
    }
    if (errors.length) {
      return {
        enteredValues: {
          userName,
          title,
          body
        },
        errors
      }
    }

    // submit to backend
    await addOpinion({title, body, userName});

    return { errors: null }
  }
  const [formState, formAction, isPending] = useActionState(submitFormAction, {errors: null});

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        <div className="errors">
          {formState.errors && (<ul>
            {formState.errors.map((error) => (<li key={error}>{error}</li>))}
          </ul>)}
        </div>
        <Submit />
      </form>
    </div>
  );
}
