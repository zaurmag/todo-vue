import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export function useTaskForm () {
  const store = useStore()
  const { handleSubmit, resetForm } = useForm()
  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup
      .string()
      .required('Введите название задачи')
  )

  const onSubmit = handleSubmit(value => {
    store.commit('add', {
      id: Date.now().toString(),
      date: Date.now(),
      ...value,
      state: 'active',
      notes: []
    })
    resetForm()
  })

  return {
    name,
    nError,
    nBlur,
    onSubmit
  }
}
