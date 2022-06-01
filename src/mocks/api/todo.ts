import { rest } from 'msw'
import type { Todo } from '../../store/todo'
import type {
  MockedRequest,
  ResponseResolver,
  DefaultRequestMultipartBody,
  PathParams,
  restContext,
} from 'msw'

export const getTodo: ResponseResolver<MockedRequest, typeof restContext> = async (
  req,
  res,
  ctx
) => {
  return res(ctx.status(200), ctx.json([{ title: 'aaaaa' }]))
}

export const mockLogout: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  return res(ctx.status(200), ctx.json('logout'))
}

export const todoHandler = [
  rest.get<DefaultRequestMultipartBody, PathParams, Todo[]>(
    'http://localhost:3000/api/login',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(todoList))
    }
  ),
]
const todoList: Todo[] = [
  {
    id: 1,
    title: '掃除',
    fixedDate: new Date(),
    isDone: false,
    importance: '低',
  },
  {
    id: 2,
    title: '洗濯',
    fixedDate: new Date(),
    isDone: true,
    importance: '中',
  },
]
