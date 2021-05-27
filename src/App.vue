<template>
  <AppPage title="Список задач">
    <div class="todo">
      <!-- Header-->
      <header class="todo__header">
        <h2 class="todo__title">Список задач</h2>
      </header>
      <!-- Body-->
      <main class="todo__body">
        <form action="#">
          <div class="tasks">
            <!-- Active tasks-->
            <div class="tasks__active">
              <div class="task is-active">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="task-1" type="checkbox"/>
                      <label class="checkbox__label" for="task-1"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Сходить в магазин</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="task-2" type="checkbox"/>
                      <label class="checkbox__label" for="task-2"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Встретить старого друга в аэропорту</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="task-3" type="checkbox"/>
                      <label class="checkbox__label" for="task-3"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Позвонить менеджеру по поводу поиска квартиры</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="task-4" type="checkbox"/>
                      <label class="checkbox__label" for="task-4"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Сходить с детьми в аквапарк</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="task-5" type="checkbox"/>
                      <label class="checkbox__label" for="task-5"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Тренировки в фитнес-центре</span></a></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Toggle inactive btn-->
            <div class="row g-0 pt-10">
              <div class="col-sm-10 offset-sm-2 ps-sm-30 ps-20">
                <button class="todo__toggle-inactive btn btn-primary btn-sm is-active" type="button">
                  <svg class="icon icon-chevron-right">
                    <use xlink:href="#chevron-right"></use>
                  </svg>Завершенные<span class="todo__inactive-count">(5)</span>
                </button>
              </div>
            </div>
            <!-- Inactive tasks-->
            <div class="tasks__inactive">
              <div class="task is-inactive">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="taskIA-1" type="checkbox" checked="checked"/>
                      <label class="checkbox__label" for="taskIA-1"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Встреча с одноклассниками</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task is-inactive">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="taskIA-2" type="checkbox" checked="checked"/>
                      <label class="checkbox__label" for="taskIA-2"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Позаниматься с английским</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task is-inactive">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="taskIA-3" type="checkbox" checked="checked"/>
                      <label class="checkbox__label" for="taskIA-3"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Почитать книгу</span></a></div>
                  </div>
                </div>
              </div>
              <div class="task is-inactive">
                <div class="row gx-sm-30 gx-15 align-items-center">
                  <div class="col-sm-2 col-auto task__left">
                    <div class="checkbox task__checkbox">
                      <input class="checkbox__input" id="taskIA-4" type="checkbox" checked="checked"/>
                      <label class="checkbox__label" for="taskIA-4"></label>
                    </div>
                  </div>
                  <div class="col-sm-10 col task__right">
                    <div class="task__title"><a class="task__title-link" href="#"><span>Утренняя пробежка</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <!-- Sidebar-->
        <!-- Add .is-active is show-->
        <aside class="sidebar">
          <button class="btn sidebar__close" type="button">
            <svg class="icon icon-x-lg">
              <use xlink:href="#x-lg"></use>
            </svg>
          </button>
          <header class="sidebar__task-header">
            <div class="checkbox sidebar__checkbox">
              <input class="checkbox__input" id="sbTask" type="checkbox">
              <label class="checkbox__label" for="sbTask"></label>
            </div>
            <h2 class="h5 sidebar__task-tlt">Сходить в магазин</h2>
          </header>
          <form action="#">
            <div class="field">
              <div class="mb-2">
                <textarea class="field__input sidebar__task-text" placeholder="Описание задачи"></textarea>
              </div>
              <div class="text-end">
                <button class="btn btn-primary btn-sm px-3 text-white" type="button">Добавить</button>
              </div>
            </div>
          </form>
          <div class="note mt-30">
            <div class="note__item">
              <button class="btn note__close p-0" type="button">
                <svg class="icon icon-x">
                  <use xlink:href="#x"></use>
                </svg>
              </button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et illo officia ratione rem, soluta voluptates? Adipisci eaque eligendi quo?
            </div>
            <div class="note__item">
              <button class="btn note__close p-0" type="button">
                <svg class="icon icon-x">
                  <use xlink:href="#x"></use>
                </svg>
              </button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, rerum?
            </div>
            <div class="note__item">
              <button class="btn note__close p-0" type="button">
                <svg class="icon icon-x">
                  <use xlink:href="#x"></use>
                </svg>
              </button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem deleniti enim labore optio recusandae?
            </div>
          </div>
        </aside>
      </main>
      <!-- Footer-->
      <footer class="todo__footer">
        <div class="row">
          <div class="col-sm-10 offset-sm-2">
            <div class="field">
              <form class="field__form" action="#">
                <input class="field__input" type="text" placeholder="Введите название задачи">
                <button class="btn field__btn" type="submit">
                  <svg class="icon icon-send">
                    <use xlink:href="#send"></use>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </AppPage>
</template>

<script>
import AppPage from './components/ui/AppPage'
export default {
  name: 'App',
  setup () {

  },
  components: {
    AppPage
  }
}
</script>
