import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export function useTaskForm (task = {}) {
  const store = useStore()
  const { handleSubmit, resetForm } = useForm()

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup
      .string()
      .required('Введите название задачи')
  )

  const onSubmit = handleSubmit(value => {
    if (Object.keys(task).length) {
      store.commit('update', {
        ...task,
        name: value.name
      })
    } else {
      store.commit('add', {
        id: Date.now().toString(),
        date: Date.now(),
        ...value,
        state: 'active',
        isOpen: false,
        notes: []
      })
    }

    resetForm()
  })

  return {
    name,
    nError,
    nBlur,
    onSubmit
  }
}
