export async function GET(req: Request, res: Response) {
    const data = [
        { 'name': 'peeraphat', 'age': 12, 'salary': 10000 },
        { 'name': 'mita', 'age': 13, 'salary': 20000 },
        { 'name': 'mongo', 'age': 14, 'salary': 30000 },
    ]
    return Response.json(data)
}