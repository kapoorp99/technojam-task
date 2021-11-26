class Solution {
public:
    vector<int> decode(vector<int>& encoded, int first) {
        int sz = encoded.size();
        vector<int> arr(sz+1);
        arr[0] = first;
        for(int i = 0;i<sz;i++)
        {
            arr[i+1] = encoded[i]^arr[i];
        }
        return arr;
    }
};