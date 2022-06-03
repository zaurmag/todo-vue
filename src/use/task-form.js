import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { watch } from 'vue'

export function useTaskForm (task) {
  const store = useStore()
  const { handleSubmit, resetForm, setFieldValue } = useForm()

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup
      .string()
      .required('Введите название задачи')
  )

  setFieldValue('name', task?.value.name)

  watch(task, task => {
    if (task) {
      setFieldValue('name', task.name)
    }
  })

  const onSubmit = handleSubmit(values => {
    if (task) {
      store.commit('task/update', {
        ...task.value,
        ...values
      })

      return
    }

    store.commit('task/add', {
      id: Date.now().toString(),
      date: Date.now(),
      ...values,
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
