import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { watch } from 'vue'

export function useTaskForm (initial, task = {}) {
  const store = useStore()
  const { handleSubmit, resetForm, setFieldValue } = useForm()

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup
      .string()
      .required('Введите название задачи')
  )

  setFieldValue('name', task?.name)

  watch(initial, ({ name }) => {
    setFieldValue('name', name)
  })

  const onSubmit = handleSubmit(value => {
    if (Object.keys(task).length) {
      store.commit('update', {
        ...task,
        ...value
      })

      return
    }

    store.commit('add', {
      id: Date.now().toString(),
      date: Date.now(),
      ...value,
      state: 'active',
      isOpen: false,
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
