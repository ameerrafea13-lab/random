#include<iostream>
#include<vector>
using namespace std;

// string repeat

// string stringrepeat(string st, int r = 5, string sep = " ", bool showend = true)
// {
//   string result;
//   for(int i = 0; i < r; i++)
//   {
//     result += st;
//     if( i < r - 1 )
//     {
//       result += sep;
//     }
//   }
//   if(showend)
//   {
//     result += sep;
//   }
//   return result;

// }
// int main()
// {
// cout << stringrepeat("ameer") << endl;
// return 0;
// }

//  zfill also can be used in python

// string zfill(string st, int width, string fill = "0")
// {
//     int len = st.length(); // 4
//     if(len < width)
//     {
//         for(int i = 0; i < width - len; i++)
//         {
//             st = fill + st;
//         }
//     }
//     return st;
// }

// int main()
// {
//     cout << zfill("155000",  11,  "@") << endl;
//     cout << zfill("5674003",  11,  "%") << endl;
//     cout << zfill("39207735",  11,  "$") << endl;
//     cout << zfill("296485360",  11,  "?") << endl;
//     cout << zfill("9375420747",  11,  "/") << endl;
// }

// string reverse

// string stringreverse(string st)
// {
//     string result;
//     for(int i = st.length(); i >= 0; i--)
//     {
//         result += st[i];
//     }
// return result;
// }

// int main()
// {
//     cout << stringreverse("reema aefar");
// }

// void gneratelettersWITHASCIIValues( char start, char end)
// {
//     for( int i = start; i <= end; i++ )
//     {
//         cout << char(i) << " | " << i << " | " << char(i + 32) << " | " << i + 32 << endl;
//     }
// }

// int main()
// {
//     gneratelettersWITHASCIIValues('A', 'Z');
//     return 0;
// }

// Get Min and Max

// int getminnumber(vector<int> nums)
// {
//     int min = nums[0];
//     for(int i = 0; i < nums.size(); i++)
//     {
//         if(nums[i] < min)
//         {
//             min = nums[i];
//         }
//     }
//     return min;
// }

// int getmaxnumber(vector<int> nums)
// {
//     int max = nums[0];
//     for(int i = 0; i > nums.size(); i++)
//     {
//         if(nums[i] > max)
//         {
//             max = nums[i];
//         }
//     }
//     return max;
// }

// int main()
// {
//     cout << getminnumber({100, 500, -1000, 600, -1200}) << endl;
//     cout << getmaxnumber({00, 500, -1000, 600, -1200});
//     return 0;
// }

// int getsumofnumbers(vector<int>nums, char op)
// {
//     int result = op == '*' ? 1 : 0;
//     for(int num : nums)
//     {
//         switch(op)
//         {
//             case '+':
//             result += num;
//             break;
//             case '-':
//             result -= num;
//             break;
//             case '*':
//             result *= num;
//             break;
//         }
//     }
//     return result;
// }

// int main()
// {
//     cout << getsumofnumbers({10, 20, 30, 5}, '-');
//     return 0;
// }