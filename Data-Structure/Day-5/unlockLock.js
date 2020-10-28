class Solution {
    public int openLock(String[] deadends, String target) {
        Set<String> deadSet = new HashSet<>(Arrays.asList(deadends));
        if (deadSet.contains(target) || deadSet.contains("0000")) {
            return -1;
        }

        Queue<String> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        queue.offer("0000");
        visited.add("0000");
        int step = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String curr = queue.poll();
                if(deadSet.contains(curr))  continue;
                if (curr.equals(target))    return step;
                StringBuilder sb = new StringBuilder(curr);
                for (int pos = 0; pos < 4; pos++) {
                    char curr_position = sb.charAt(pos);
 
                    String s1 = sb.substring(0,pos)+(curr_position=='9'?0:curr_position-'0'+1)+ sb.substring(pos+1);
                    
                    String s2 = sb.substring(0,pos)+(curr_position=='0'?9:curr_position-'0'-1)+ sb.substring(pos+1);
                   
                    if (!visited.contains(s1) && !deadSet.contains(s1)) {
                        queue.offer(s1);
                        visited.add(s1);
                    }
                   
                    if (!visited.contains(s2) && !deadSet.contains(s2)) {
                        queue.offer(s2);
                        visited.add(s2);
                    }
                }
            }
            step++;
        }

        return -1;
    }
}