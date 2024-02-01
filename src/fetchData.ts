/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼
// 將整個程式碼放在一個檔案中，例如 main.ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchData(url: string): Promise<Todo> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data as Todo;
  } catch (error) {
    return await Promise.reject(error);
  }
}

// 使用範例
fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

export { fetchData };
