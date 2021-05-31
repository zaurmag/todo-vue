import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export function useNoteForm (id) {
  const store = useStore()
  const { handleSubmit, resetForm } = useForm()
  const { value: desc, errorMessage: dError, handleBlur: dBlur } = useField(
    'desc',
    yup
      .string()
      .required('Введите описание задачи')
  )

  const onSubmit = handleSubmit(value => {
    store.commit('addNote', {
      id: Date.now().toString(),
      taskID: id,
      ...value
    })
    resetForm()
  })

  return {
    desc,
    dError,
    dBlur,
    onSubmit
  }
}
